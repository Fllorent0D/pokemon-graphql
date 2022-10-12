import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesUpdateInput } from '../region-names/region-names-update.input';
import { Type } from 'class-transformer';
import { region_namesWhereUniqueInput } from '../region-names/region-names-where-unique.input';

@ArgsType()
export class UpdateOneregionNamesArgs {

    @Field(() => region_namesUpdateInput, {nullable:false})
    @Type(() => region_namesUpdateInput)
    data!: region_namesUpdateInput;

    @Field(() => region_namesWhereUniqueInput, {nullable:false})
    @Type(() => region_namesWhereUniqueInput)
    where!: region_namesWhereUniqueInput;
}
