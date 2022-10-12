import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesUpdateManyMutationInput } from '../region-names/region-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { region_namesWhereInput } from '../region-names/region-names-where.input';

@ArgsType()
export class UpdateManyregionNamesArgs {

    @Field(() => region_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => region_namesUpdateManyMutationInput)
    data!: region_namesUpdateManyMutationInput;

    @Field(() => region_namesWhereInput, {nullable:true})
    @Type(() => region_namesWhereInput)
    where?: region_namesWhereInput;
}
