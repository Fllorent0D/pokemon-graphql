import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesUpdateManyMutationInput } from '../berry-firmness-names/berry-firmness-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesWhereInput } from '../berry-firmness-names/berry-firmness-names-where.input';

@ArgsType()
export class UpdateManyberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateManyMutationInput)
    data!: berry_firmness_namesUpdateManyMutationInput;

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    @Type(() => berry_firmness_namesWhereInput)
    where?: berry_firmness_namesWhereInput;
}
