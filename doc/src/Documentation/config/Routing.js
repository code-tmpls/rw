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
import { DateTimeRangePickerPage } from '@DocFormElements/DateTimeRangePicker/index.js';
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
import { FlowChartPage } from '@DocVisualization/FlowChart/index.js';
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
    { path:"Component/AccordianList", component:<Page content={<AccordianPage />} activeId="react" /> },
    { path:"Component/AccordianListItems", component:<Page content={<AccordianListItemsPage  />} activeId="react" /> },
    { path:"Component/Alert", component:<Page content={<AlertPage />} activeId="react" /> },
    { path:"Component/Avatar", component:<Page content={<AvatarPage />} activeId="react" /> },
    { path:"Component/Badge", component:<Page content={<BadgePage />} activeId="react" /> },
    { path:"Component/Breadcrumb", component:<Page content={<BreadcrumbPage />} activeId="react" /> },
    { path:"Component/Button", component:<Page content={<ButtonPage />} activeId="react" /> },
    { path:"Component/Calendar", component:<Page content={<CalendarPage />} activeId="react" /> },
    { path:"Component/Card", component:<Page content={<CardPage />} activeId="react" /> },
    { path:"Component/Carousel", component:<Page content={<CarouselPage />} activeId="react" /> },
    { path:"Component/Cascader", component:<Page content={<CascaderPage />} activeId="react" /> },
    { path:"Component/Drawer", component:<Page content={<DrawerPage />} activeId="react" /> },
    { path:"Component/ListGroup", component:<Page content={<ListGroupPage />} activeId="react" /> },
    { path:"Component/Loading", component:<Page content={<LoadingPage />} activeId="react" /> },
    { path:"Component/Modal", component:<Page content={<ModalPage />} activeId="react" /> },
    { path:"Component/RuleBuilder", component:<Page content={<RuleBuilderPage />} activeId="react" /> },
    { path:"Component/Table", component:<Page content={<TablePage />} activeId="react" /> },
    { path:"Component/Tabs", component:<Page content={<TabsPage />} activeId="react" /> },
    { path:"Component/Tag", component:<Page content={<TagPage />} activeId="react" /> },
    { path:"Component/Toast", component:<Page content={<ToastPage />} activeId="react" /> },
    { path:"Component/ToolTip", component:<Page content={<ToolTipPage />} activeId="react" /> },
    
    { path:"Feature/AppRouting", component:<Page content={<AppRoutingPage />} activeId="react" /> },
    { path:"Feature/SpeechListener", component:<Page content={<SpeechListenerPage />} activeId="react" /> },

    
    { path:"FormElement/Autocomplete", component:<Page content={<AutocompletePage />} activeId="react" /> },
    { path:"FormElement/SelectDropdown", component:<Page content={<SelectPage />} activeId="react" /> },
    { path:"FormElement/TextBox", component:<Page content={<TextBoxPage />} activeId="react" /> },
    { path:"FormElement/TextArea", component:<Page content={<TextAreaPage />} activeId="react" /> },
    { path:"FormElement/ColorPicker", component:<Page content={<ColorPickerPage />} activeId="react" /> },
    { path:"FormElement/Choice", component:<Page content={<ChoicePage />} activeId="react" /> },
    { path:"FormElement/DateTimeRangePicker", component:<Page content={<DateTimeRangePickerPage />} activeId="react" /> },
    { path:"FormElement/DateTimePicker", component:<Page content={<DateTimePickerPage />} activeId="react" /> },
    { path:"FormElement/Range", component:<Page content={<RangePage />} activeId="react" /> },
    { path:"FormElement/InputGroup", component:<Page content={<InputGroupPage />} activeId="react" /> },

    { path:"HeadersAndFooters/Headings", component:<Page content={<HeadingPage />} activeId="react" /> },
    
    { path:"Layout/Fonts", component:<Page content={<FontPage />} activeId="react" /> },
    { path:"Layout/Grid", component:<Page content={<GridPage />} activeId="react" /> },
    { path:"Layout/Order", component:<Page content={<OrderPage />} activeId="react" /> },

    
    { path:"Visualization/AreaChart", component:<Page content={<AreaChartPage />} activeId="react" /> },
    { path:"Visualization/BarChart", component:<Page content={<BarChartPage />} activeId="react" /> },
    { path:"Visualization/BoxChart", component:<Page content={<BoxChartPage />} activeId="react" /> },
    { path:"Visualization/CompositionChart", component:<Page content={<CompositionChartPage />} activeId="react" /> },
    { path:"Visualization/CorrelationChart", component:<Page content={<CorrelationChartPage />} activeId="react" /> },
    { path:"Visualization/DendogramChart", component:<Page content={<DendogramChartPage />} activeId="react" /> },
    { path:"Visualization/FlowChart", component:<Page content={<FlowChartPage />} activeId="react" /> },
    { path:"Visualization/FunnelChart", component:<Page content={<FunnelChartPage />} activeId="react" /> },
    { path:"Visualization/LineChart", component:<Page content={<LineChartPage />} activeId="react" /> },
    { path:"Visualization/PieChart", component:<Page content={<PieChartPage />} activeId="react" /> },
    { path:"Visualization/SankeyChart", component:<Page content={<SankeyChartPage />} activeId="react" /> },
    { path:"Visualization/ScatterChart", component:<Page content={<ScatterChartPage />} activeId="react" /> },
    { path:"Visualization/TreeMapChart", component:<Page content={<TreeMapChartPage />} activeId="react" /> },
    { path:"Visualization/TwoByTwoChart", component:<Page content={<TwoByTwoChartPage />} activeId="react" /> },
    { path:"Visualization/VennChart", component:<Page content={<VennChartPage />} activeId="react" /> },
    { path:"Visualization/WaterfallChart", component:<Page content={<WaterfallChartPage />} activeId="react" /> },

    { path:"Themes/AppColors", component:<Page content={<AppColorsPage />} activeId="react" /> },

    { path:"CodeEditorsViewers/Highlight", component:<Page content={<HighlightPage />} activeId="react" /> },

    { path:"AdvancedTopics/Redux", component:<Page content={<ReduxPage />} activeId="react" /> },
    { path:"AdvancedTopics/RxJS", component:<Page content={<RxJSPage />} activeId="react" /> },

    { path:"ReadyMadeScreen/Authentication", component:<Page content={<AuthenticationPage />} activeId="react" /> },
    { path:"ReadyMadeScreen/ImageGallery", component:<Page content={<ImageGalleryPage />} activeId="react" /> },
    { path:"ReadyMadeScreen/ReadyMadeDropdowns", component:<Page content={<ReadyMadeDropdownsPage />} activeId="react"  /> }
];