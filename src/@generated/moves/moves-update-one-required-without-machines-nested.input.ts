import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMachinesInput } from './moves-update-without-machines.input';

@InputType()
export class movesUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMachinesInput, {nullable:true})
    @Type(() => movesUpdateWithoutMachinesInput)
    update?: movesUpdateWithoutMachinesInput;
}
