import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateNestedOneWithoutTypesInput } from '../move-damage-classes/move-damage-classes-create-nested-one-without-types.input';
import { generationsCreateNestedOneWithoutTypesInput } from '../generations/generations-create-nested-one-without-types.input';
import { berriesCreateNestedManyWithoutTypesInput } from '../berries/berries-create-nested-many-without-types.input';
import { move_changelogCreateNestedManyWithoutTypesInput } from '../move-changelog/move-changelog-create-nested-many-without-types.input';
import { pokemon_typesCreateNestedManyWithoutTypesInput } from '../pokemon-types/pokemon-types-create-nested-many-without-types.input';
import { type_efficacyCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput } from '../type-efficacy/type-efficacy-create-nested-many-without-types-type-efficacy-target-type-id-totypes.input';
import { type_efficacyCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput } from '../type-efficacy/type-efficacy-create-nested-many-without-types-type-efficacy-damage-type-id-totypes.input';
import { type_namesCreateNestedManyWithoutTypesInput } from '../type-names/type-names-create-nested-many-without-types.input';

@InputType()
export class typesCreateWithoutMovesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_damage_classesCreateNestedOneWithoutTypesInput, {nullable:true})
    move_damage_classes?: move_damage_classesCreateNestedOneWithoutTypesInput;

    @Field(() => generationsCreateNestedOneWithoutTypesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutTypesInput;

    @Field(() => berriesCreateNestedManyWithoutTypesInput, {nullable:true})
    berries?: berriesCreateNestedManyWithoutTypesInput;

    @Field(() => move_changelogCreateNestedManyWithoutTypesInput, {nullable:true})
    move_changelog?: move_changelogCreateNestedManyWithoutTypesInput;

    @Field(() => pokemon_typesCreateNestedManyWithoutTypesInput, {nullable:true})
    pokemon_types?: pokemon_typesCreateNestedManyWithoutTypesInput;

    @Field(() => type_efficacyCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput, {nullable:true})
    type_efficacy_type_efficacy_target_type_idTotypes?: type_efficacyCreateNestedManyWithoutTypes_type_efficacy_target_type_idTotypesInput;

    @Field(() => type_efficacyCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput, {nullable:true})
    type_efficacy_type_efficacy_damage_type_idTotypes?: type_efficacyCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput;

    @Field(() => type_namesCreateNestedManyWithoutTypesInput, {nullable:true})
    type_names?: type_namesCreateNestedManyWithoutTypesInput;
}
