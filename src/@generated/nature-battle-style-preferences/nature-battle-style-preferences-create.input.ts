import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_battle_stylesCreateNestedOneWithoutNature_battle_style_preferencesInput } from '../move-battle-styles/move-battle-styles-create-nested-one-without-nature-battle-style-preferences.input';
import { naturesCreateNestedOneWithoutNature_battle_style_preferencesInput } from '../natures/natures-create-nested-one-without-nature-battle-style-preferences.input';

@InputType()
export class nature_battle_style_preferencesCreateInput {

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => move_battle_stylesCreateNestedOneWithoutNature_battle_style_preferencesInput, {nullable:false})
    move_battle_styles!: move_battle_stylesCreateNestedOneWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesCreateNestedOneWithoutNature_battle_style_preferencesInput, {nullable:false})
    natures!: naturesCreateNestedOneWithoutNature_battle_style_preferencesInput;
}
