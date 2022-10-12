import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesCreateInput } from './machines-create.input';
import { machinesUpdateInput } from './machines-update.input';

@ArgsType()
export class UpsertOnemachinesArgs {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesCreateInput, {nullable:false})
    @Type(() => machinesCreateInput)
    create!: machinesCreateInput;

    @Field(() => machinesUpdateInput, {nullable:false})
    @Type(() => machinesUpdateInput)
    update!: machinesUpdateInput;
}
