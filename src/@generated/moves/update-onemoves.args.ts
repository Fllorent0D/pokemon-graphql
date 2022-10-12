import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { movesUpdateInput } from './moves-update.input';
import { Type } from 'class-transformer';
import { movesWhereUniqueInput } from './moves-where-unique.input';

@ArgsType()
export class UpdateOnemovesArgs {

    @Field(() => movesUpdateInput, {nullable:false})
    @Type(() => movesUpdateInput)
    data!: movesUpdateInput;

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;
}
