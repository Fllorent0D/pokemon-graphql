import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsUncheckedCreateNestedManyWithoutRegionsInput } from '../generations/generations-unchecked-create-nested-many-without-regions.input';
import { locationsUncheckedCreateNestedManyWithoutRegionsInput } from '../locations/locations-unchecked-create-nested-many-without-regions.input';
import { pokedexesUncheckedCreateNestedManyWithoutRegionsInput } from '../pokedexes/pokedexes-unchecked-create-nested-many-without-regions.input';
import { version_group_regionsUncheckedCreateNestedManyWithoutRegionsInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-regions.input';

@InputType()
export class regionsUncheckedCreateWithoutRegion_namesInput {

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

    @Field(() => version_group_regionsUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    version_group_regions?: version_group_regionsUncheckedCreateNestedManyWithoutRegionsInput;
}
