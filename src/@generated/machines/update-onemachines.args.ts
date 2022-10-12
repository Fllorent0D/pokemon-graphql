import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesUpdateInput } from './machines-update.input';
import { Type } from 'class-transformer';
import { machinesWhereUniqueInput } from './machines-where-unique.input';

@ArgsType()
export class UpdateOnemachinesArgs {

    @Field(() => machinesUpdateInput, {nullable:false})
    @Type(() => machinesUpdateInput)
    data!: machinesUpdateInput;

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;
}
