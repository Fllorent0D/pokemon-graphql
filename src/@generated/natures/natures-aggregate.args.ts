import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { naturesOrderByWithRelationInput } from './natures-order-by-with-relation.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class naturesAggregateArgs {

    @Field(() => naturesWhereInput, {nullable:true})
    @Type(() => naturesWhereInput)
    where?: naturesWhereInput;

    @Field(() => [naturesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<naturesOrderByWithRelationInput>;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    cursor?: naturesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
