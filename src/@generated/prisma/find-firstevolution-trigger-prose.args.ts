import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereInput } from '../evolution-trigger-prose/evolution-trigger-prose-where.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseOrderByWithRelationInput } from '../evolution-trigger-prose/evolution-trigger-prose-order-by-with-relation.input';
import { evolution_trigger_proseWhereUniqueInput } from '../evolution-trigger-prose/evolution-trigger-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Evolution_trigger_proseScalarFieldEnum } from './evolution-trigger-prose-scalar-field.enum';

@ArgsType()
export class FindFirstevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    @Type(() => evolution_trigger_proseWhereInput)
    where?: evolution_trigger_proseWhereInput;

    @Field(() => [evolution_trigger_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<evolution_trigger_proseOrderByWithRelationInput>;

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:true})
    cursor?: evolution_trigger_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Evolution_trigger_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Evolution_trigger_proseScalarFieldEnum>;
}
