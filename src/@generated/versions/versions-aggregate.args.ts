import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { versionsOrderByWithRelationInput } from './versions-order-by-with-relation.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class versionsAggregateArgs {

    @Field(() => versionsWhereInput, {nullable:true})
    @Type(() => versionsWhereInput)
    where?: versionsWhereInput;

    @Field(() => [versionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<versionsOrderByWithRelationInput>;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    cursor?: versionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
