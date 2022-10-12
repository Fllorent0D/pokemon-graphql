import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { movesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymovesArgs {

    @Field(() => movesWhereInput, {nullable:true})
    @Type(() => movesWhereInput)
    where?: movesWhereInput;
}
