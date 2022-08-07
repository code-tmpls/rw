import React from 'react';
import { Navigate } from 'react-router-dom';

const Page  = React.lazy( ()=>import('@DocCore/Page.js') );

import { ReduxPage } from '@DocAdvancedTopics/Redux/index.js';
import { RxJSPage } from '@DocAdvancedTopics/Rxjs/index.js';

import { HighlightPage } from '@DocCodeEditorsViewers/Highlight/index.js';

import { AccordianPage } from '@DocComponents/Accordian/index.js';
import { AccordianListItemsPage } from '@DocComponents/AccordianListItems/index.js';
import { AlertPage } from '@DocComponents/Alert/index.js';
import { AvatarPage } from '@DocComponents/Avatar/index.js';
import { BadgePage } from '@DocComponents/Badge/index.js';
import { BreadcrumbPage } from '@DocComponents/Breadcrumb/index.js';
import { ButtonPage } from '@DocComponents/Button/index.js';
import { CalendarPage } from '@DocComponents/Calendar/index.js';
import { CardPage } from '@DocComponents/Card/index.js';
import { CarouselPage } from '@DocComponents/Carousel/index.js';
import { CascaderPage } from '@DocComponents/Cascader/index.js';
import { DrawerPage } from '@DocComponents/Drawer/index.js';
import { ListGroupPage } from '@DocComponents/ListGroup/index.js';
import { LoadingPage } from '@DocComponents/Loading/index.js';
import { ModalPage } from '@DocComponents/Modal/index.js';
import { RuleBuilderPage } from '@DocComponents/RuleBuilder/index.js';
import { TablePage } from '@DocComponents/Table/index.js';
import { TabsPage } from '@DocComponents/Tabs/index.js';
import { TagPage } from '@DocComponents/Tag/index.js';
import { ToastPage } from '@DocComponents/Toast/index.js';
import { ToolTipPage } from '@DocComponents/ToolTip/index.js';

import { AppRoutingPage } from '@DocFeatures/AppRouting/index.js';
import { SpeechListenerPage } from '@DocFeatures/SpeechListener/index.js';

import { AutocompletePage } from '@DocFormElements/Autocomplete/index.js';
import { SelectPage } from '@DocFormElements/Select/index.js';
import { TextBoxPage } from '@DocFormElements/TextBox/index.js';
import { TextAreaPage } from '@DocFormElements/TextArea/index.js';
import { ColorPickerPage } from '@DocFormElements/ColorPicker/index.js';
import { ChoicePage } from '@DocFormElements/Choice/index.js';
import { DateTimePickerPage } from '@DocFormElements/DateTimePicker/index.js';
import { RangePage } from '@DocFormElements/Range/index.js';
import { InputGroupPage } from '@DocFormElements/InputGroup/index.js';

import { HeadingPage } from '@DocHeadersAndFooters/Heading/index.js';

import { FontPage } from '@DocLayout/Fonts/index.js';
import { GridPage } from '@DocLayout/Grid/index.js';
import { OrderPage } from '@DocLayout/Order/index.js';

import { AuthenticationPage } from '@DocReadyMadeScreen/Authentication/index.js';
import { ImageGalleryPage } from '@DocReadyMadeScreen/ImageGallery/index.js';
import { ReadyMadeDropdownsPage } from '@DocReadyMadeScreen/ReadyMadeDropdowns/index.js';

import { AppColorsPage } from '@DocThemes/AppColors/index.js';

import { AreaChartPage } from '@DocVisualization/AreaChart/index.js';
import { BarChartPage } from '@DocVisualization/BarChart/index.js';
import { BoxChartPage } from '@DocVisualization/BoxChart/index.js';
import { CompositionChartPage } from '@DocVisualization/CompositionChart/index.js';
import { CorrelationChartPage } from '@DocVisualization/CorrelationChart/index.js';
import { DendogramChartPage } from '@DocVisualization/DendogramChart/index.js';
import { FunnelChartPage } from '@DocVisualization/FunnelChart/index.js';
import { LineChartPage } from '@DocVisualization/LineChart/index.js';
import { PieChartPage } from '@DocVisualization/PieChart/index.js';
import { SankeyChartPage } from '@DocVisualization/SankeyChart/index.js';
import { ScatterChartPage } from '@DocVisualization/ScatterChart/index.js';
import { TreeMapChartPage } from '@DocVisualization/TreeMapChart/index.js';
import { TwoByTwoChartPage } from '@DocVisualization/TwoByTwoChart/index.js';
import { VennChartPage } from '@DocVisualization/VennChart/index.js';
import { WaterfallChartPage } from '@DocVisualization/WaterfallChart/index.js';

export const Routes = [
    { path:"/", component: <Navigate to="Component/AccordianList" /> },
    { path:"Component/AccordianList", component:<Page content={<AccordianPage />} /> },
    { path:"Component/AccordianListItems", component:<Page content={<AccordianListItemsPage />} /> },
    { path:"Component/Alert", component:<Page content={<AlertPage />} /> },
    { path:"Component/Avatar", component:<Page content={<AvatarPage />} /> },
    { path:"Component/Badge", component:<Page content={<BadgePage />} /> },
    { path:"Component/Breadcrumb", component:<Page content={<BreadcrumbPage />} /> },
    { path:"Component/Button", component:<Page content={<ButtonPage />} /> },
    { path:"Component/Calendar", component:<Page content={<CalendarPage />} /> },
    { path:"Component/Card", component:<Page content={<CardPage />} /> },
    { path:"Component/Carousel", component:<Page content={<CarouselPage />} /> },
    { path:"Component/Cascader", component:<Page content={<CascaderPage />} /> },
    { path:"Component/Drawer", component:<Page content={<DrawerPage />} /> },
    { path:"Component/ListGroup", component:<Page content={<ListGroupPage />} /> },
    { path:"Component/Loading", component:<Page content={<LoadingPage />} /> },
    { path:"Component/Modal", component:<Page content={<ModalPage />} /> },
    { path:"Component/RuleBuilder", component:<Page content={<RuleBuilderPage />} /> },
    { path:"Component/Table", component:<Page content={<TablePage />} /> },
    { path:"Component/Tabs", component:<Page content={<TabsPage />} /> },
    { path:"Component/Tag", component:<Page content={<TagPage />} /> },
    { path:"Component/Toast", component:<Page content={<ToastPage />} /> },
    { path:"Component/ToolTip", component:<Page content={<ToolTipPage />} /> },
    
    { path:"Feature/AppRouting", component:<Page content={<AppRoutingPage />} /> },
    { path:"Feature/SpeechListener", component:<Page content={<SpeechListenerPage />} /> },

    
    { path:"FormElement/Autocomplete", component:<Page content={<AutocompletePage />} /> },
    { path:"FormElement/Select", component:<Page content={<SelectPage />} /> },
    { path:"FormElement/TextBox", component:<Page content={<TextBoxPage />} /> },
    { path:"FormElement/TextArea", component:<Page content={<TextAreaPage />} /> },
    { path:"FormElement/ColorPicker", component:<Page content={<ColorPickerPage />} /> },
    { path:"FormElement/Choice", component:<Page content={<ChoicePage />} /> },
    { path:"FormElement/DateTimePicker", component:<Page content={<DateTimePickerPage />} /> },
    { path:"FormElement/Range", component:<Page content={<RangePage />} /> },
    { path:"FormElement/InputGroup", component:<Page content={<InputGroupPage />} /> },

    { path:"HeadersAndFooters/Headings", component:<Page content={<HeadingPage />} /> },
    
    { path:"Layout/Fonts", component:<Page content={<FontPage />} /> },
    { path:"Layout/Grid", component:<Page content={<GridPage />} /> },
    { path:"Layout/Order", component:<Page content={<OrderPage />} /> },

    
    { path:"Visualization/AreaChart", component:<Page content={<AreaChartPage />} /> },
    { path:"Visualization/BarChart", component:<Page content={<BarChartPage />} /> },
    { path:"Visualization/BoxChart", component:<Page content={<BoxChartPage />} /> },
    { path:"Visualization/CompositionChart", component:<Page content={<CompositionChartPage />} /> },
    { path:"Visualization/CorrelationChart", component:<Page content={<CorrelationChartPage />} /> },
    { path:"Visualization/DendogramChart", component:<Page content={<DendogramChartPage />} /> },
    { path:"Visualization/FunnelChart", component:<Page content={<FunnelChartPage />} /> },
    { path:"Visualization/LineChart", component:<Page content={<LineChartPage />} /> },
    { path:"Visualization/PieChart", component:<Page content={<PieChartPage />} /> },
    { path:"Visualization/SankeyChart", component:<Page content={<SankeyChartPage />} /> },
    { path:"Visualization/ScatterChart", component:<Page content={<ScatterChartPage />} /> },
    { path:"Visualization/TreeMapChart", component:<Page content={<TreeMapChartPage />} /> },
    { path:"Visualization/TwoByTwoChart", component:<Page content={<TwoByTwoChartPage />} /> },
    { path:"Visualization/VennChart", component:<Page content={<VennChartPage />} /> },
    { path:"Visualization/WaterfallChart", component:<Page content={<WaterfallChartPage />} /> },

    { path:"Themes/AppColors", component:<Page content={<AppColorsPage />} /> },

    { path:"CodeEditorsViewers/Highlight", component:<Page content={<HighlightPage />} /> },

    { path:"AdvancedTopics/Redux", component:<Page content={<ReduxPage />} /> },
    { path:"AdvancedTopics/RxJS", component:<Page content={<RxJSPage />} /> },

    { path:"ReadyMadeScreen/Authentication", component:<Page content={<AuthenticationPage />} /> },
    { path:"ReadyMadeScreen/ImageGallery", component:<Page content={<ImageGalleryPage />} /> },
    { path:"ReadyMadeScreen/ReadyMadeDropdowns", component:<Page content={<ReadyMadeDropdownsPage />} /> }
];