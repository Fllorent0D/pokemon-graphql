import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Move_changelogListRelationFilter } from '../prisma/move-changelog-list-relation-filter.input';
import { Move_effect_changelogListRelationFilter } from '../prisma/move-effect-changelog-list-relation-filter.input';
import { Move_effect_proseListRelationFilter } from '../prisma/move-effect-prose-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';

@InputType()
export class move_effectsWhereInput {

    @Field(() => [move_effectsWhereInput], {nullable:true})
    AND?: Array<move_effectsWhereInput>;

    @Field(() => [move_effectsWhereInput], {nullable:true})
    OR?: Array<move_effectsWhereInput>;

    @Field(() => [move_effectsWhereInput], {nullable:true})
    NOT?: Array<move_effectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => Move_changelogListRelationFilter, {nullable:true})
    move_changelog?: Move_changelogListRelationFilter;

    @Field(() => Move_effect_changelogListRelationFilter, {nullable:true})
    move_effect_changelog?: Move_effect_changelogListRelationFilter;

    @Field(() => Move_effect_proseListRelationFilter, {nullable:true})
    move_effect_prose?: Move_effect_proseListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
