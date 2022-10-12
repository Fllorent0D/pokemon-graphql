import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Move_battle_style_proseListRelationFilter } from '../prisma/move-battle-style-prose-list-relation-filter.input';
import { Nature_battle_style_preferencesListRelationFilter } from '../prisma/nature-battle-style-preferences-list-relation-filter.input';

@InputType()
export class move_battle_stylesWhereInput {

    @Field(() => [move_battle_stylesWhereInput], {nullable:true})
    AND?: Array<move_battle_stylesWhereInput>;

    @Field(() => [move_battle_stylesWhereInput], {nullable:true})
    OR?: Array<move_battle_stylesWhereInput>;

    @Field(() => [move_battle_stylesWhereInput], {nullable:true})
    NOT?: Array<move_battle_stylesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Move_battle_style_proseListRelationFilter, {nullable:true})
    move_battle_style_prose?: Move_battle_style_proseListRelationFilter;

    @Field(() => Nature_battle_style_preferencesListRelationFilter, {nullable:true})
    nature_battle_style_preferences?: Nature_battle_style_preferencesListRelationFilter;
}
