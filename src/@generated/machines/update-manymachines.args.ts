import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesUpdateManyMutationInput } from './machines-update-many-mutation.input';
import { Type } from 'class-transformer';
import { machinesWhereInput } from './machines-where.input';

@ArgsType()
export class UpdateManymachinesArgs {

    @Field(() => machinesUpdateManyMutationInput, {nullable:false})
    @Type(() => machinesUpdateManyMutationInput)
    data!: machinesUpdateManyMutationInput;

    @Field(() => machinesWhereInput, {nullable:true})
    @Type(() => machinesWhereInput)
    where?: machinesWhereInput;
}
