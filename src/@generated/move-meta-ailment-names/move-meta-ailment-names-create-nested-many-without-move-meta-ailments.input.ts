import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-create-without-move-meta-ailments.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-create-or-connect-without-move-meta-ailments.input';
import { move_meta_ailment_namesWhereUniqueInput } from './move-meta-ailment-names-where-unique.input';

@InputType()
export class move_meta_ailment_namesCreateNestedManyWithoutMove_meta_ailmentsInput {

    @Field(() => [move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput)
    create?: Array<move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput)
    connectOrCreate?: Array<move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    connect?: Array<move_meta_ailment_namesWhereUniqueInput>;
}
