import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Move_battle_stylesRelationFilter } from '../prisma/move-battle-styles-relation-filter.input';
import { NaturesRelationFilter } from '../prisma/natures-relation-filter.input';

@InputType()
export class nature_battle_style_preferencesWhereInput {

    @Field(() => [nature_battle_style_preferencesWhereInput], {nullable:true})
    AND?: Array<nature_battle_style_preferencesWhereInput>;

    @Field(() => [nature_battle_style_preferencesWhereInput], {nullable:true})
    OR?: Array<nature_battle_style_preferencesWhereInput>;

    @Field(() => [nature_battle_style_preferencesWhereInput], {nullable:true})
    NOT?: Array<nature_battle_style_preferencesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    low_hp_preference?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    high_hp_preference?: IntFilter;

    @Field(() => Move_battle_stylesRelationFilter, {nullable:true})
    move_battle_styles?: Move_battle_stylesRelationFilter;

    @Field(() => NaturesRelationFilter, {nullable:true})
    natures?: NaturesRelationFilter;
}
