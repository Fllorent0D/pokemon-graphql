import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_namesUpdateManyMutationInput } from '../move-names/move-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_namesWhereInput } from '../move-names/move-names-where.input';

@ArgsType()
export class UpdateManymoveNamesArgs {

    @Field(() => move_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_namesUpdateManyMutationInput)
    data!: move_namesUpdateManyMutationInput;

    @Field(() => move_namesWhereInput, {nullable:true})
    @Type(() => move_namesWhereInput)
    where?: move_namesWhereInput;
}
