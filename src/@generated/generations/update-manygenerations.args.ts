import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsUpdateManyMutationInput } from './generations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { generationsWhereInput } from './generations-where.input';

@ArgsType()
export class UpdateManygenerationsArgs {

    @Field(() => generationsUpdateManyMutationInput, {nullable:false})
    @Type(() => generationsUpdateManyMutationInput)
    data!: generationsUpdateManyMutationInput;

    @Field(() => generationsWhereInput, {nullable:true})
    @Type(() => generationsWhereInput)
    where?: generationsWhereInput;
}
