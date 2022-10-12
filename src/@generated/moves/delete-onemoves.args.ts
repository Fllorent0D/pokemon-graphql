import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemovesArgs {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;
}
