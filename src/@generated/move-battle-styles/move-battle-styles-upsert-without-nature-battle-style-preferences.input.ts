import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput } from './move-battle-styles-update-without-nature-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateWithoutNature_battle_style_preferencesInput } from './move-battle-styles-create-without-nature-battle-style-preferences.input';

@InputType()
export class move_battle_stylesUpsertWithoutNature_battle_style_preferencesInput {

    @Field(() => move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput, {nullable:false})
    @Type(() => move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput)
    update!: move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput;

    @Field(() => move_battle_stylesCreateWithoutNature_battle_style_preferencesInput, {nullable:false})
    @Type(() => move_battle_stylesCreateWithoutNature_battle_style_preferencesInput)
    create!: move_battle_stylesCreateWithoutNature_battle_style_preferencesInput;
}
