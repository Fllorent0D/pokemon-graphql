import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesUpdateInput } from '../berry-firmness-names/berry-firmness-names-update.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesWhereUniqueInput } from '../berry-firmness-names/berry-firmness-names-where-unique.input';

@ArgsType()
export class UpdateOneberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesUpdateInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateInput)
    data!: berry_firmness_namesUpdateInput;

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;
}
