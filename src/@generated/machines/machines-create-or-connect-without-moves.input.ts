import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesCreateWithoutMovesInput } from './machines-create-without-moves.input';

@InputType()
export class machinesCreateOrConnectWithoutMovesInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesCreateWithoutMovesInput, {nullable:false})
    @Type(() => machinesCreateWithoutMovesInput)
    create!: machinesCreateWithoutMovesInput;
}
