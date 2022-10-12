import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';
import { Super_contest_effect_proseListRelationFilter } from '../prisma/super-contest-effect-prose-list-relation-filter.input';

@InputType()
export class super_contest_effectsWhereInput {

    @Field(() => [super_contest_effectsWhereInput], {nullable:true})
    AND?: Array<super_contest_effectsWhereInput>;

    @Field(() => [super_contest_effectsWhereInput], {nullable:true})
    OR?: Array<super_contest_effectsWhereInput>;

    @Field(() => [super_contest_effectsWhereInput], {nullable:true})
    NOT?: Array<super_contest_effectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => Super_contest_effect_proseListRelationFilter, {nullable:true})
    super_contest_effect_prose?: Super_contest_effect_proseListRelationFilter;
}
