import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereInput } from '../machines/machines-where.input';

@InputType()
export class MachinesListRelationFilter {

    @Field(() => machinesWhereInput, {nullable:true})
    every?: machinesWhereInput;

    @Field(() => machinesWhereInput, {nullable:true})
    some?: machinesWhereInput;

    @Field(() => machinesWhereInput, {nullable:true})
    none?: machinesWhereInput;
}
