import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesUpdateInput } from '../move-names/move-names-update.input';
import { Type } from 'class-transformer';
import { move_namesWhereUniqueInput } from '../move-names/move-names-where-unique.input';

@ArgsType()
export class UpdateOnemoveNamesArgs {

    @Field(() => move_namesUpdateInput, {nullable:false})
    @Type(() => move_namesUpdateInput)
    data!: move_namesUpdateInput;

    @Field(() => move_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_namesWhereUniqueInput)
    where!: move_namesWhereUniqueInput;
}
