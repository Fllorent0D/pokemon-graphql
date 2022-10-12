import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesCreateInput } from './machines-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemachinesArgs {

    @Field(() => machinesCreateInput, {nullable:false})
    @Type(() => machinesCreateInput)
    data!: machinesCreateInput;
}
