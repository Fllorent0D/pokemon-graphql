import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Pokeathlon_statsRelationFilter } from '../prisma/pokeathlon-stats-relation-filter.input';
import { NaturesRelationFilter } from '../prisma/natures-relation-filter.input';

@InputType()
export class nature_pokeathlon_statsWhereInput {

    @Field(() => [nature_pokeathlon_statsWhereInput], {nullable:true})
    AND?: Array<nature_pokeathlon_statsWhereInput>;

    @Field(() => [nature_pokeathlon_statsWhereInput], {nullable:true})
    OR?: Array<nature_pokeathlon_statsWhereInput>;

    @Field(() => [nature_pokeathlon_statsWhereInput], {nullable:true})
    NOT?: Array<nature_pokeathlon_statsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokeathlon_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_change?: IntFilter;

    @Field(() => Pokeathlon_statsRelationFilter, {nullable:true})
    pokeathlon_stats?: Pokeathlon_statsRelationFilter;

    @Field(() => NaturesRelationFilter, {nullable:true})
    natures?: NaturesRelationFilter;
}
