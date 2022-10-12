import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateNestedOneWithoutLocation_area_proseInput } from '../location-areas/location-areas-create-nested-one-without-location-area-prose.input';

@InputType()
export class location_area_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => location_areasCreateNestedOneWithoutLocation_area_proseInput, {nullable:false})
    location_areas!: location_areasCreateNestedOneWithoutLocation_area_proseInput;
}
