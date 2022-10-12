import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { naturesCreateNestedOneWithoutNature_battle_style_preferencesInput } from '../natures/natures-create-nested-one-without-nature-battle-style-preferences.input';

@InputType()
export class nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput {

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => naturesCreateNestedOneWithoutNature_battle_style_preferencesInput, {nullable:false})
    natures!: naturesCreateNestedOneWithoutNature_battle_style_preferencesInput;
}
