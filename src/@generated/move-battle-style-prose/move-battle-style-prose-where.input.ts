import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Move_battle_stylesRelationFilter } from '../prisma/move-battle-styles-relation-filter.input';

@InputType()
export class move_battle_style_proseWhereInput {

    @Field(() => [move_battle_style_proseWhereInput], {nullable:true})
    AND?: Array<move_battle_style_proseWhereInput>;

    @Field(() => [move_battle_style_proseWhereInput], {nullable:true})
    OR?: Array<move_battle_style_proseWhereInput>;

    @Field(() => [move_battle_style_proseWhereInput], {nullable:true})
    NOT?: Array<move_battle_style_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Move_battle_stylesRelationFilter, {nullable:true})
    move_battle_styles?: Move_battle_stylesRelationFilter;
}
