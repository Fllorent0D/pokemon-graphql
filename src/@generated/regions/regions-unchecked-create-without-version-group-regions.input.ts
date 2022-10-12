import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsUncheckedCreateNestedManyWithoutRegionsInput } from '../generations/generations-unchecked-create-nested-many-without-regions.input';
import { locationsUncheckedCreateNestedManyWithoutRegionsInput } from '../locations/locations-unchecked-create-nested-many-without-regions.input';
import { pokedexesUncheckedCreateNestedManyWithoutRegionsInput } from '../pokedexes/pokedexes-unchecked-create-nested-many-without-regions.input';
import { region_namesUncheckedCreateNestedManyWithoutRegionsInput } from '../region-names/region-names-unchecked-create-nested-many-without-regions.input';

@InputType()
export class regionsUncheckedCreateWithoutVersion_group_regionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    generations?: generationsUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => locationsUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    locations?: locationsUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => pokedexesUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    pokedexes?: pokedexesUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => region_namesUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    region_names?: region_namesUncheckedCreateNestedManyWithoutRegionsInput;
}
