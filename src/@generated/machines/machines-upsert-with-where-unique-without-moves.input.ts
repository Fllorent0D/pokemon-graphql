import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesUpdateWithoutMovesInput } from './machines-update-without-moves.input';
import { machinesCreateWithoutMovesInput } from './machines-create-without-moves.input';

@InputType()
export class machinesUpsertWithWhereUniqueWithoutMovesInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => machinesUpdateWithoutMovesInput)
    update!: machinesUpdateWithoutMovesInput;

    @Field(() => machinesCreateWithoutMovesInput, {nullable:false})
    @Type(() => machinesCreateWithoutMovesInput)
    create!: machinesCreateWithoutMovesInput;
}
