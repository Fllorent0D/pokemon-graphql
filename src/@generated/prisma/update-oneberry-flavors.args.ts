import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsUpdateInput } from '../berry-flavors/berry-flavors-update.input';
import { Type } from 'class-transformer';
import { berry_flavorsWhereUniqueInput } from '../berry-flavors/berry-flavors-where-unique.input';

@ArgsType()
export class UpdateOneberryFlavorsArgs {

    @Field(() => berry_flavorsUpdateInput, {nullable:false})
    @Type(() => berry_flavorsUpdateInput)
    data!: berry_flavorsUpdateInput;

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;
}
