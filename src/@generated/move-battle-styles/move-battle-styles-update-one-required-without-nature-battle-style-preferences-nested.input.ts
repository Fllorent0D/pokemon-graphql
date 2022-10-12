import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesCreateWithoutNature_battle_style_preferencesInput } from './move-battle-styles-create-without-nature-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateOrConnectWithoutNature_battle_style_preferencesInput } from './move-battle-styles-create-or-connect-without-nature-battle-style-preferences.input';
import { move_battle_stylesUpsertWithoutNature_battle_style_preferencesInput } from './move-battle-styles-upsert-without-nature-battle-style-preferences.input';
import { move_battle_stylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput } from './move-battle-styles-update-without-nature-battle-style-preferences.input';

@InputType()
export class move_battle_stylesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput {

    @Field(() => move_battle_stylesCreateWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => move_battle_stylesCreateWithoutNature_battle_style_preferencesInput)
    create?: move_battle_stylesCreateWithoutNature_battle_style_preferencesInput;

    @Field(() => move_battle_stylesCreateOrConnectWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => move_battle_stylesCreateOrConnectWithoutNature_battle_style_preferencesInput)
    connectOrCreate?: move_battle_stylesCreateOrConnectWithoutNature_battle_style_preferencesInput;

    @Field(() => move_battle_stylesUpsertWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => move_battle_stylesUpsertWithoutNature_battle_style_preferencesInput)
    upsert?: move_battle_stylesUpsertWithoutNature_battle_style_preferencesInput;

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:true})
    @Type(() => move_battle_stylesWhereUniqueInput)
    connect?: move_battle_stylesWhereUniqueInput;

    @Field(() => move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput)
    update?: move_battle_stylesUpdateWithoutNature_battle_style_preferencesInput;
}
