import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateWithoutNature_battle_style_preferencesInput } from './move-battle-styles-create-without-nature-battle-style-preferences.input';

@InputType()
export class move_battle_stylesCreateOrConnectWithoutNature_battle_style_preferencesInput {

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_stylesWhereUniqueInput)
    where!: move_battle_stylesWhereUniqueInput;

    @Field(() => move_battle_stylesCreateWithoutNature_battle_style_preferencesInput, {nullable:false})
    @Type(() => move_battle_stylesCreateWithoutNature_battle_style_preferencesInput)
    create!: move_battle_stylesCreateWithoutNature_battle_style_preferencesInput;
}
