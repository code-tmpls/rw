import React from 'react';

const ReactPage  = React.lazy( ()=>import('@DocCore/react/Page.js') );

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
import { FileUploadPage } from '@DocReactFormElements/FileUpload/index.js';
import { PasswordPage } from '@DocReactFormElements/Password/index.js';
import { TextBoxPage } from '@DocReactFormElements/TextBox/index.js';
import { TextAreaPage } from '@DocReactFormElements/TextArea/index.js';
import { ColorPickerPage } from '@DocReactFormElements/ColorPicker/index.js';
import { ChoicePage } from '@DocReactFormElements/Choice/index.js';
import { DateTimePickerPage } from '@DocReactFormElements/DateTimePicker/index.js';
import { RangePage } from '@DocReactFormElements/Range/index.js';

import { HeadingPage } from '@DocReactHeadersAndFooters/Heading/index.js';

import { FontPage } from '@DocReactLayout/Fonts/index.js';
import { GridSystemPage } from '@DocReactLayout/GridSystem/index.js';
import { OrderPage } from '@DocReactLayout/Order/index.js';

import { AuthenticationPage } from '@DocReactReadyMadeScreen/Authentication/index.js';
import { ImageGalleryPage } from '@DocReactReadyMadeScreen/ImageGallery/index.js';
import { ReadyMadeDropdownsPage } from '@DocReactReadyMadeScreen/ReadyMadeDropdowns/index.js';

import { AppThemesPage } from '@DocReactThemes/AppThemes/index.js';

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

export const ReactRoutes = [
    { path:"Component/AccordianList", component:<ReactPage content={<AccordianPage />} activeId="react" /> },
    { path:"Component/AccordianListItems", component:<ReactPage content={<AccordianListItemsPage  />} activeId="react" /> },
    { path:"Component/Alert", component:<ReactPage content={<AlertPage />} activeId="react" /> },
    { path:"Component/Avatar", component:<ReactPage content={<AvatarPage />} activeId="react" /> },
    { path:"Component/Badge", component:<ReactPage content={<BadgePage />} activeId="react" /> },
    { path:"Component/Breadcrumb", component:<ReactPage content={<BreadcrumbPage />} activeId="react" /> },
    { path:"Component/Button", component:<ReactPage content={<ButtonPage />} activeId="react" /> },
    { path:"Component/Calendar", component:<ReactPage content={<CalendarPage />} activeId="react" /> },
    { path:"Component/Card", component:<ReactPage content={<CardPage />} activeId="react" /> },
    { path:"Component/Carousel", component:<ReactPage content={<CarouselPage />} activeId="react" /> },
    { path:"Component/Drawer", component:<ReactPage content={<DrawerPage />} activeId="react" /> },
    { path:"Component/Loading", component:<ReactPage content={<LoadingPage />} activeId="react" /> },
    { path:"Component/Modal", component:<ReactPage content={<ModalPage />} activeId="react" /> },
    { path:"Component/ProgressBar", component:<ReactPage content={<ProgressBarPage />} activeId="react" /> },
    { path:"Component/Table", component:<ReactPage content={<TablePage />} activeId="react" /> },
    { path:"Component/Menu", component:<ReactPage content={<MenuPage />} activeId="react" /> },
    { path:"Component/Tag", component:<ReactPage content={<TagPage />} activeId="react" /> },
    { path:"Component/Toast", component:<ReactPage content={<ToastPage />} activeId="react" /> },
    { path:"Component/Hover", component:<ReactPage content={<HoverPage />} activeId="react" /> },
    
    { path:"Feature/AppRouting", component:<ReactPage content={<AppRoutingPage />} activeId="react" /> },
    { path:"Feature/SpeechListener", component:<ReactPage content={<SpeechListenerPage />} activeId="react" /> },

    { path:"FormElement/Autocomplete", component:<ReactPage content={<AutocompletePage />} activeId="react" /> },
    { path:"FormElement/SelectDropdown", component:<ReactPage content={<SelectPage />} activeId="react" /> },
    { path:"FormElement/Switch", component:<ReactPage content={<SwitchPage />} activeId="react" /> },
    { path:"FormElement/Dropdown", component:<ReactPage content={<DropdownPage />} activeId="react" /> },
    { path:"FormElement/Email", component:<ReactPage content={<EmailPage />} activeId="react" /> },
    { path:"FormElement/FileUpload", component:<ReactPage content={<FileUploadPage />} activeId="react" /> },
    { path:"FormElement/Password", component:<ReactPage content={<PasswordPage />} activeId="react" /> },
    { path:"FormElement/TextBox", component:<ReactPage content={<TextBoxPage />} activeId="react" /> },
    { path:"FormElement/TextArea", component:<ReactPage content={<TextAreaPage />} activeId="react" /> },
    { path:"FormElement/ColorPicker", component:<ReactPage content={<ColorPickerPage />} activeId="react" /> },
    { path:"FormElement/Choice", component:<ReactPage content={<ChoicePage />} activeId="react" /> },
    { path:"FormElement/DateTimePicker", component:<ReactPage content={<DateTimePickerPage />} activeId="react" /> },
    { path:"FormElement/Range", component:<ReactPage content={<RangePage />} activeId="react" /> },

    { path:"HeadersAndFooters/Headings", component:<ReactPage content={<HeadingPage />} activeId="react" /> },
    
    { path:"Layout/Fonts", component:<ReactPage content={<FontPage />} activeId="react" /> },
    { path:"Layout/GridSystem", component:<ReactPage content={<GridSystemPage />} activeId="react" /> },
    { path:"Layout/Order", component:<ReactPage content={<OrderPage />} activeId="react" /> },

    
    { path:"Visualization/AreaChart", component:<ReactPage content={<AreaChartPage />} activeId="react" /> },
    { path:"Visualization/BarChart", component:<ReactPage content={<BarChartPage />} activeId="react" /> },
    { path:"Visualization/BoxChart", component:<ReactPage content={<BoxChartPage />} activeId="react" /> },
    { path:"Visualization/CompositionChart", component:<ReactPage content={<CompositionChartPage />} activeId="react" /> },
    { path:"Visualization/CorrelationChart", component:<ReactPage content={<CorrelationChartPage />} activeId="react" /> },
    { path:"Visualization/DendogramChart", component:<ReactPage content={<DendogramChartPage />} activeId="react" /> },
    { path:"Visualization/FlowChart", component:<ReactPage content={<FlowChartPage />} activeId="react" /> },
    { path:"Visualization/FunnelChart", component:<ReactPage content={<FunnelChartPage />} activeId="react" /> },
    { path:"Visualization/LineChart", component:<ReactPage content={<LineChartPage />} activeId="react" /> },
    { path:"Visualization/PieChart", component:<ReactPage content={<PieChartPage />} activeId="react" /> },
    { path:"Visualization/SankeyChart", component:<ReactPage content={<SankeyChartPage />} activeId="react" /> },
    { path:"Visualization/ScatterChart", component:<ReactPage content={<ScatterChartPage />} activeId="react" /> },
    { path:"Visualization/TreeMapChart", component:<ReactPage content={<TreeMapChartPage />} activeId="react" /> },
    { path:"Visualization/TwoByTwoChart", component:<ReactPage content={<TwoByTwoChartPage />} activeId="react" /> },
    { path:"Visualization/VennChart", component:<ReactPage content={<VennChartPage />} activeId="react" /> },
    { path:"Visualization/WaterfallChart", component:<ReactPage content={<WaterfallChartPage />} activeId="react" /> },

    { path:"Themes/AppThemes", component:<ReactPage content={<AppThemesPage />} activeId="react" /> },

    { path:"CodeEditorsViewers/Highlight", component:<ReactPage content={<HighlightPage />} activeId="react" /> },
    { path:"CodeEditorsViewers/Stackblitz", component:<ReactPage content={<StackblitzPage />} activeId="react" /> },

    { path:"AdvancedTopics/ReactContext", component:<ReactPage content={<ReactContextPage />} activeId="react" /> },
    { path:"AdvancedTopics/Redux", component:<ReactPage content={<ReduxPage />} activeId="react" /> },
    { path:"AdvancedTopics/RxJS", component:<ReactPage content={<RxJSPage />} activeId="react" /> },

    { path:"ReadyMadeScreen/Authentication", component:<ReactPage content={<AuthenticationPage />} activeId="react" /> },
    { path:"ReadyMadeScreen/ImageGallery", component:<ReactPage content={<ImageGalleryPage />} activeId="react" /> },
    { path:"ReadyMadeScreen/ReadyMadeDropdowns", component:<ReactPage content={<ReadyMadeDropdownsPage />} activeId="react"  /> }
];