import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesUpdateWithoutMovesInput } from './machines-update-without-moves.input';

@InputType()
export class machinesUpdateWithWhereUniqueWithoutMovesInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => machinesUpdateWithoutMovesInput)
    data!: machinesUpdateWithoutMovesInput;
}
