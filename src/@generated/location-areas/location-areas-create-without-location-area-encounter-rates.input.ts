import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { locationsCreateNestedOneWithoutLocation_areasInput } from '../locations/locations-create-nested-one-without-location-areas.input';
import { encountersCreateNestedManyWithoutLocation_areasInput } from '../encounters/encounters-create-nested-many-without-location-areas.input';
import { location_area_proseCreateNestedManyWithoutLocation_areasInput } from '../location-area-prose/location-area-prose-create-nested-many-without-location-areas.input';

@InputType()
export class location_areasCreateWithoutLocation_area_encounter_ratesInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => locationsCreateNestedOneWithoutLocation_areasInput, {nullable:false})
    locations!: locationsCreateNestedOneWithoutLocation_areasInput;

    @Field(() => encountersCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    encounters?: encountersCreateNestedManyWithoutLocation_areasInput;

    @Field(() => location_area_proseCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    location_area_prose?: location_area_proseCreateNestedManyWithoutLocation_areasInput;
}
