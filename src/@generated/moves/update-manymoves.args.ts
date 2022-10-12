import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { movesUpdateManyMutationInput } from './moves-update-many-mutation.input';
import { Type } from 'class-transformer';
import { movesWhereInput } from './moves-where.input';

@ArgsType()
export class UpdateManymovesArgs {

    @Field(() => movesUpdateManyMutationInput, {nullable:false})
    @Type(() => movesUpdateManyMutationInput)
    data!: movesUpdateManyMutationInput;

    @Field(() => movesWhereInput, {nullable:true})
    @Type(() => movesWhereInput)
    where?: movesWhereInput;
}
