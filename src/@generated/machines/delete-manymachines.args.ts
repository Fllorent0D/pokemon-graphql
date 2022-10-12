import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymachinesArgs {

    @Field(() => machinesWhereInput, {nullable:true})
    @Type(() => machinesWhereInput)
    where?: machinesWhereInput;
}
