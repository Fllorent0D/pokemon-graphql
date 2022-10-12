import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesWhereUniqueInput } from '../berry-firmness-names/berry-firmness-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;
}
