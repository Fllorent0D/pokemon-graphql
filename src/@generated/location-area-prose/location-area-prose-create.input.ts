import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutLocation_area_proseInput } from '../languages/languages-create-nested-one-without-location-area-prose.input';
import { location_areasCreateNestedOneWithoutLocation_area_proseInput } from '../location-areas/location-areas-create-nested-one-without-location-area-prose.input';

@InputType()
export class location_area_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutLocation_area_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutLocation_area_proseInput;

    @Field(() => location_areasCreateNestedOneWithoutLocation_area_proseInput, {nullable:false})
    location_areas!: location_areasCreateNestedOneWithoutLocation_area_proseInput;
}
