import React from 'react';

const Page  = React.lazy( ()=>import('@DocCore/Page.js') );
import { GetStarted } from '@DocCore/get-started.js';
import { ReactContextPage } from '@DocReactAdvancedTopics/ReactContext/index.js';
import { ReduxPage } from '@DocReactAdvancedTopics/Redux/index.js';
import { RxJSPage } from '@DocReactAdvancedTopics/Rxjs/index.js';

import { HighlightPage } from '@DocReactCodeEditorsViewers/Highlight/index.js';
import { StackblitzPage } from '@DocReactCodeEditorsViewers/Stackblitz/index.js';

import { AccordianPage } from '@DocReactComponents/Accordian/index.js';
import { AccordianListItemsPage } from '@DocReactComponents/AccordianListItems/index.js';
import { AlertPage } from '@DocReactComponents/Alert/index.js';
import { AvatarPage } from '@DocReactComponents/Avatar/index.js';
import { BadgePage } from '@DocReactComponents/Badge/index.js';
import { BreadcrumbPage } from '@DocReactComponents/Breadcrumb/index.js';
import { ButtonPage } from '@DocReactComponents/Button/index.js';
import { CalendarPage } from '@DocReactComponents/Calendar/index.js';
import { CardPage } from '@DocReactComponents/Card/index.js';
import { CarouselPage } from '@DocReactComponents/Carousel/index.js';
import { DrawerPage } from '@DocReactComponents/Drawer/index.js';
import { DropdownPage } from '@DocReactComponents/Dropdown/index.js';
import { LoadingPage } from '@DocReactComponents/Loading/index.js';
import { ModalPage } from '@DocReactComponents/Modal/index.js';
import { ProgressBarPage } from '@DocReactComponents/ProgressBar/index.js';
import { TablePage } from '@DocReactComponents/Table/index.js';
import { MenuPage } from '@DocReactComponents/Menu/index.js';
import { TagPage } from '@DocReactComponents/Tag/index.js';
import { ToastPage } from '@DocReactComponents/Toast/index.js';
import { HoverPage } from '@DocReactComponents/Hover/index.js';

import { AppRoutingPage } from '@DocReactFeatures/AppRouting/index.js';
import { SpeechListenerPage } from '@DocReactFeatures/SpeechListener/index.js';

import { AutocompletePage } from '@DocReactFormElements/Autocomplete/index.js';
import { SelectPage } from '@DocReactFormElements/Select/index.js';
import { SwitchPage } from '@DocReactFormElements/Switch/index.js';
import { EmailPage } from '@DocReactFormElements/Email/index.js';
import { PasswordPage } from '@DocReactFormElements/Password/index.js';
import { TextBoxPage } from '@DocReactFormElements/TextBox/index.js';
import { TextAreaPage } from '@DocReactFormElements/TextArea/index.js';
import { ColorPickerPage } from '@DocReactFormElements/ColorPicker/index.js';
import { ChoicePage } from '@DocReactFormElements/Choice/index.js';
import { DateTimeRangePickerPage } from '@DocReactFormElements/DateTimeRangePicker/index.js';
import { DateTimePickerPage } from '@DocReactFormElements/DateTimePicker/index.js';
import { RangePage } from '@DocReactFormElements/Range/index.js';
import { InputGroupPage } from '@DocReactFormElements/InputGroup/index.js';

import { HeadingPage } from '@DocReactHeadersAndFooters/Heading/index.js';

import { FontPage } from '@DocReactLayout/Fonts/index.js';
import { GridSystemPage } from '@DocReactLayout/GridSystem/index.js';
import { OrderPage } from '@DocReactLayout/Order/index.js';

import { AuthenticationPage } from '@DocReactReadyMadeScreen/Authentication/index.js';
import { ImageGalleryPage } from '@DocReactReadyMadeScreen/ImageGallery/index.js';
import { ReadyMadeDropdownsPage } from '@DocReactReadyMadeScreen/ReadyMadeDropdowns/index.js';

import { AppColorsPage } from '@DocReactThemes/AppColors/index.js';

import { AreaChartPage } from '@DocReactVisualization/AreaChart/index.js';
import { BarChartPage } from '@DocReactVisualization/BarChart/index.js';
import { BoxChartPage } from '@DocReactVisualization/BoxChart/index.js';
import { CompositionChartPage } from '@DocReactVisualization/CompositionChart/index.js';
import { CorrelationChartPage } from '@DocReactVisualization/CorrelationChart/index.js';
import { DendogramChartPage } from '@DocReactVisualization/DendogramChart/index.js';
import { FlowChartPage } from '@DocReactVisualization/FlowChart/index.js';
import { FunnelChartPage } from '@DocReactVisualization/FunnelChart/index.js';
import { LineChartPage } from '@DocReactVisualization/LineChart/index.js';
import { PieChartPage } from '@DocReactVisualization/PieChart/index.js';
import { SankeyChartPage } from '@DocReactVisualization/SankeyChart/index.js';
import { ScatterChartPage } from '@DocReactVisualization/ScatterChart/index.js';
import { TreeMapChartPage } from '@DocReactVisualization/TreeMapChart/index.js';
import { TwoByTwoChartPage } from '@DocReactVisualization/TwoByTwoChart/index.js';
import { VennChartPage } from '@DocReactVisualization/VennChart/index.js';
import { WaterfallChartPage } from '@DocReactVisualization/WaterfallChart/index.js';

export const Routes = [
    { path:"/", component:<GetStarted /> },
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
    { path:"Component/Drawer", component:<Page content={<DrawerPage />} activeId="react" /> },
    { path:"Component/Dropdown", component:<Page content={<DropdownPage />} activeId="react" /> },
    { path:"Component/Loading", component:<Page content={<LoadingPage />} activeId="react" /> },
    { path:"Component/Modal", component:<Page content={<ModalPage />} activeId="react" /> },
    { path:"Component/ProgressBar", component:<Page content={<ProgressBarPage />} activeId="react" /> },
    { path:"Component/Table", component:<Page content={<TablePage />} activeId="react" /> },
    { path:"Component/Menu", component:<Page content={<MenuPage />} activeId="react" /> },
    { path:"Component/Tag", component:<Page content={<TagPage />} activeId="react" /> },
    { path:"Component/Toast", component:<Page content={<ToastPage />} activeId="react" /> },
    { path:"Component/Hover", component:<Page content={<HoverPage />} activeId="react" /> },
    
    { path:"Feature/AppRouting", component:<Page content={<AppRoutingPage />} activeId="react" /> },
    { path:"Feature/SpeechListener", component:<Page content={<SpeechListenerPage />} activeId="react" /> },

    { path:"FormElement/Autocomplete", component:<Page content={<AutocompletePage />} activeId="react" /> },
    { path:"FormElement/SelectDropdown", component:<Page content={<SelectPage />} activeId="react" /> },
    { path:"FormElement/Switch", component:<Page content={<SwitchPage />} activeId="react" /> },
    { path:"FormElement/Email", component:<Page content={<EmailPage />} activeId="react" /> },
    { path:"FormElement/Password", component:<Page content={<PasswordPage />} activeId="react" /> },
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
    { path:"Layout/GridSystem", component:<Page content={<GridSystemPage />} activeId="react" /> },
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
    { path:"CodeEditorsViewers/Stackblitz", component:<Page content={<StackblitzPage />} activeId="react" /> },

    { path:"AdvancedTopics/ReactContext", component:<Page content={<ReactContextPage />} activeId="react" /> },
    { path:"AdvancedTopics/Redux", component:<Page content={<ReduxPage />} activeId="react" /> },
    { path:"AdvancedTopics/RxJS", component:<Page content={<RxJSPage />} activeId="react" /> },

    { path:"ReadyMadeScreen/Authentication", component:<Page content={<AuthenticationPage />} activeId="react" /> },
    { path:"ReadyMadeScreen/ImageGallery", component:<Page content={<ImageGalleryPage />} activeId="react" /> },
    { path:"ReadyMadeScreen/ReadyMadeDropdowns", component:<Page content={<ReadyMadeDropdownsPage />} activeId="react"  /> }
];