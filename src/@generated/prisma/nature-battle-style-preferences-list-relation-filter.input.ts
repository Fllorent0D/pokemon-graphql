import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where.input';

@InputType()
export class Nature_battle_style_preferencesListRelationFilter {

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    every?: nature_battle_style_preferencesWhereInput;

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    some?: nature_battle_style_preferencesWhereInput;

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    none?: nature_battle_style_preferencesWhereInput;
}
