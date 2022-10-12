import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Contest_effect_proseListRelationFilter } from '../prisma/contest-effect-prose-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';

@InputType()
export class contest_effectsWhereInput {

    @Field(() => [contest_effectsWhereInput], {nullable:true})
    AND?: Array<contest_effectsWhereInput>;

    @Field(() => [contest_effectsWhereInput], {nullable:true})
    OR?: Array<contest_effectsWhereInput>;

    @Field(() => [contest_effectsWhereInput], {nullable:true})
    NOT?: Array<contest_effectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => Contest_effect_proseListRelationFilter, {nullable:true})
    contest_effect_prose?: Contest_effect_proseListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
