import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersWhereInput } from '../evolution-triggers/evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { evolution_triggersOrderByWithRelationInput } from '../evolution-triggers/evolution-triggers-order-by-with-relation.input';
import { evolution_triggersWhereUniqueInput } from '../evolution-triggers/evolution-triggers-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateevolutionTriggersArgs {

    @Field(() => evolution_triggersWhereInput, {nullable:true})
    @Type(() => evolution_triggersWhereInput)
    where?: evolution_triggersWhereInput;

    @Field(() => [evolution_triggersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<evolution_triggersOrderByWithRelationInput>;

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:true})
    cursor?: evolution_triggersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
