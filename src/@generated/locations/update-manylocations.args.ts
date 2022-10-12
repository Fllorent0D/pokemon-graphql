import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsUpdateManyMutationInput } from './locations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { locationsWhereInput } from './locations-where.input';

@ArgsType()
export class UpdateManylocationsArgs {

    @Field(() => locationsUpdateManyMutationInput, {nullable:false})
    @Type(() => locationsUpdateManyMutationInput)
    data!: locationsUpdateManyMutationInput;

    @Field(() => locationsWhereInput, {nullable:true})
    @Type(() => locationsWhereInput)
    where?: locationsWhereInput;
}
