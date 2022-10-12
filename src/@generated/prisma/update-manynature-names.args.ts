import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesUpdateManyMutationInput } from '../nature-names/nature-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { nature_namesWhereInput } from '../nature-names/nature-names-where.input';

@ArgsType()
export class UpdateManynatureNamesArgs {

    @Field(() => nature_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => nature_namesUpdateManyMutationInput)
    data!: nature_namesUpdateManyMutationInput;

    @Field(() => nature_namesWhereInput, {nullable:true})
    @Type(() => nature_namesWhereInput)
    where?: nature_namesWhereInput;
}
