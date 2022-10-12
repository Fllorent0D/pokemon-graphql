import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersUncheckedCreateNestedManyWithoutLocation_areasInput } from '../encounters/encounters-unchecked-create-nested-many-without-location-areas.input';
import { location_area_proseUncheckedCreateNestedManyWithoutLocation_areasInput } from '../location-area-prose/location-area-prose-unchecked-create-nested-many-without-location-areas.input';

@InputType()
export class location_areasUncheckedCreateWithoutLocation_area_encounter_ratesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => encountersUncheckedCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    encounters?: encountersUncheckedCreateNestedManyWithoutLocation_areasInput;

    @Field(() => location_area_proseUncheckedCreateNestedManyWithoutLocation_areasInput, {nullable:true})
    location_area_prose?: location_area_proseUncheckedCreateNestedManyWithoutLocation_areasInput;
}
