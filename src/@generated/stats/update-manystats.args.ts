import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsUpdateManyMutationInput } from './stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { statsWhereInput } from './stats-where.input';

@ArgsType()
export class UpdateManystatsArgs {

    @Field(() => statsUpdateManyMutationInput, {nullable:false})
    @Type(() => statsUpdateManyMutationInput)
    data!: statsUpdateManyMutationInput;

    @Field(() => statsWhereInput, {nullable:true})
    @Type(() => statsWhereInput)
    where?: statsWhereInput;
}
